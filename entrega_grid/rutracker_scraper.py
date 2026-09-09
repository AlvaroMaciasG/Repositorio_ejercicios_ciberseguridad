import os
import time
import requests
from bs4 import BeautifulSoup

# Parámetros de ejecución
FORUM_URL = "https://rutracker.org/forum/viewforum.php?f=1594&start=1100"
BASE_URL = "https://rutracker.org/forum/"
DOWNLOAD_DIR = "./rutracker_torrents"

# Requisito Crítico: Insertar cookie bb_session válida
COOKIES = {
    'bb_session': 'wCEAITxf98g6ESKY9XuT' 
}

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def init_env():
    if not os.path.exists(DOWNLOAD_DIR):
        os.makedirs(DOWNLOAD_DIR)

def extract_topic_ids(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    topic_ids = []
    
    # Selector CSS objetivo: Enlaces de títulos de temas en la tabla
    for link in soup.select('a.tt-text'):
        href = link.get('href')
        if href and 'viewtopic.php?t=' in href:
            t_id = href.split('t=')[1]
            topic_ids.append(t_id)
            
    return set(topic_ids) # Eliminar duplicados

def download_torrent(session, t_id):
    dl_url = f"{BASE_URL}dl.php?t={t_id}"
    
    # Rutracker procesa las descargas de torrents mediante un POST al script dl.php
    payload = {'t': t_id}
    response = session.post(dl_url, data=payload, headers=HEADERS, cookies=COOKIES, stream=True)
    
    # Validar que el servidor devuelve un archivo bittorrent y no una página de error/login
    content_type = response.headers.get('Content-Type', '')
    
    if response.status_code == 200 and 'application/x-bittorrent' in content_type:
        file_path = os.path.join(DOWNLOAD_DIR, f"{t_id}.torrent")
        with open(file_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"[SUCCESS] Descargado: {t_id}.torrent")
    else:
        print(f"[FAIL] Hilo {t_id}. Causa probable: Cookie inválida, límite de descargas o tema bloqueado.")

def main():
    init_env()
    session = requests.Session()
    
    print(f"[*] Obteniendo índice de: {FORUM_URL}")
    response = session.get(FORUM_URL, headers=HEADERS, cookies=COOKIES)
    
    if response.status_code != 200:
        print("[FATAL] Imposible conectar con el servidor.")
        return

    topic_ids = extract_topic_ids(response.text)
    print(f"[*] Identificados {len(topic_ids)} temas. Iniciando bucle de descarga.")

    for index, t_id in enumerate(topic_ids, 1):
        print(f"[{index}/{len(topic_ids)}] Procesando tema {t_id}...")
        download_torrent(session, t_id)
        
        # Rate Limiting: Previene baneo por dDoS de capa 7
        time.sleep(2)

if __name__ == "__main__":
    main()
import subprocess

def ping_ip(ip_address):
    try:
        # Pinga l'IP
        subprocess.check_output(['ping', '-c', '1', ip_address])
        print(f"L'IP {ip_address} è raggiungibile.")
        return True
    except subprocess.CalledProcessError:
        print(f"L'IP {ip_address} non è raggiungibile.")
        return False

def unmount_and_remount(partuuid):
    # Trova il dispositivo associato al PARTUUID
    try:
        device = subprocess.check_output(['blkid', '-o', 'device', '-t', f'PARTUUID={partuuid}'], text=True).strip()
        if device:
            subprocess.call(['sudo', 'umount', device])
            print(f"Dispositivo {device} smontato.")
        else:
            print(f"Nessun dispositivo trovato con PARTUUID {partuuid}.")
    except subprocess.CalledProcessError:
        print("Errore nel trovare il dispositivo con blkid.")

    # Rimonta il disco
    subprocess.call(['sudo', 'sh', 'mount_apache_disk.sh'])
    print("Disco rimontato.")

def main():
    ip_address = '192.168.1.19'
    partuuid = '565d42be-01'
    
    if not ping_ip(ip_address):
        # Se l'IP non è raggiungibile, smonta il disco e riavvia
        subprocess.call(['sudo', 'sh', 'umount_apache_disk.sh'])
        print("Riavvio del sistema...")
        subprocess.call(['sudo', 'reboot'])
        
        # Dopo il riavvio, smonta il disco usando PARTUUID
        unmount_and_remount(partuuid)

if __name__ == "__main__":
    main()

import os
import subprocess
import webbrowser

def start():
    # Step 1: Navigate to the client directory
    client_directory = './client'  # Replace with the actual path to your client directory
    os.chdir(client_directory)

    # Step 2: Run `npm i` to install dependencies
    subprocess.run(['npm', 'i'])

    # Step 3: Run `npm run dev` to start the app
    subprocess.Popen(['npm', 'run', 'dev'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Step 4: Open a browser and go to the specified URL
    app_url = 'http://localhost:5173'  # Replace with the actual URL of your app
    webbrowser.open_new_tab(app_url)

if __name__ == "__main__":
    start()

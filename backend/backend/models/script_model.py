import subprocess

def generate_script(prompt):
    try:
        result = subprocess.run(["ollama", "run", "mistral", prompt], capture_output=True, text=True)
        return result.stdout.strip()
    except Exception as e:
        return f"Error: {str(e)}"

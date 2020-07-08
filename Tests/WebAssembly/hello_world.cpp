char* memory = 0;

int main() { 
  const char* s = "Hello from WASM";
  const int l = 15;
  
  for (int i = 0; i < l; ++i)
    memory[i] = s[i];
    
  return l;
}

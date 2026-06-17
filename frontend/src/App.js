import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import { Toaster } from "@/components/ui/sonner";

function App() {
  useEffect(() => {
    document.title = "Veteris — Software de gestión para clínicas veterinarias";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "Veteris es el software todo-en-uno para clínicas veterinarias: expediente clínico digital, agenda, inventario, punto de venta y recordatorios por WhatsApp. Toda tu clínica conectada.";
    if (meta) meta.setAttribute('content', desc);
    else {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      m.setAttribute('content', desc);
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;

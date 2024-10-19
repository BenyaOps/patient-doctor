import Image from "next/image";
import MultipleDates from "./components/MultipleDates";
import HoursButtons from "./components/HoursButtons";

export default function Home() {
  const getLastDayOfMonth = (year: number, month: number): Date => {
    return new Date(year, month + 1, 0); // El día 0 del mes siguiente es el último día del mes actual
  };
  // Ejemplo de uso
const today = new Date();
const lastDayOfCurrentMonth = getLastDayOfMonth(today.getFullYear(), today.getMonth());
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MultipleDates dateLimit={lastDayOfCurrentMonth} />    
      <HoursButtons />  
    </div>
  );
}

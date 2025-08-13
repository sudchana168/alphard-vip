import React from "react";
import { CalendarDays, Phone, Car } from "lucide-react";

const Card = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 text-center">
    <Icon className="mx-auto h-12 w-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Button = ({ children, className }) => (
  <button className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-2xl transition ${className}`}>
    {children}
  </button>
);

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url('/alphard-bg.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center text-white">
        <div className="bg-black/60 p-8 rounded-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Alphard VIP Car Rental</h1>
          <p className="text-xl mb-6">บริการรถเช่าแบบมีคนขับสุดหรู พร้อมให้บริการคุณทุกโอกาส</p>
          <Button className="text-lg px-8">จองตอนนี้</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">บริการของเรา</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card icon={Car} title="บริการเช่าพร้อมคนขับ" description="เดินทางอย่างสะดวกสบายด้วยคนขับมืออาชีพ" />
          <Card icon={CalendarDays} title="จองง่าย รวดเร็ว" description="จองรถล่วงหน้าผ่านเว็บไซต์หรือโทร" />
          <Card icon={Phone} title="บริการลูกค้า 24/7" description="ติดต่อเราตลอดเวลาเมื่อคุณต้องการ" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">พร้อมเดินทางอย่างมีสไตล์แล้วหรือยัง?</h2>
        <Button className="text-lg px-8 bg-white text-blue-600 hover:bg-gray-100">ติดต่อเราเลย</Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2025 Alphard VIP Car Rental. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default HomePage;

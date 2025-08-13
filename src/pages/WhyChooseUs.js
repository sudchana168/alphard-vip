import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const WhyChooseUs = () => {
  // const [lang, setLang] = useState("th"); // th = ไทย, en = อังกฤษ
  const { lang } = useLanguage();

  const content = {
    th: {
      title: "ค่าบริการ Alphard 2021-2023",
      rates: [
        {
          title: "บริการในกรุงเทพและปริมณฑล 5 ชม.",
          price: "ค่าบริการ: 3,900 บาท",
          ot: "OT: 800 บาท/ชม.",
          note: "ไม่รวมค่าน้ำมัน, ค่าทางด่วน, ค่าที่จอดรถ และภาษีมูลค่าเพิ่ม"
        },
        {
          title: "บริการในกรุงเทพและปริมณฑล 10 ชม.",
          price: "ค่าบริการ: 5,500 บาท",
          ot: "OT: 500 บาท/ชม.",
          note: "ไม่รวมค่าน้ำมัน, ค่าทางด่วน, ค่าที่จอดรถ และภาษีมูลค่าเพิ่ม"
        },
        {
          title: "เดินทางต่างจังหวัด (10 ชม./วัน)",
          price: "ค่าบริการ: 6,500 บาท/วัน",
          ot: "OT: 500 บาท/ชม.",
          extra: "ค่าที่พักคนขับ: 500 บาท/คืน (กรณีไม่มีที่พักให้คนขับ)",
          note: "ไม่รวมค่าน้ำมัน, ค่าทางด่วน, ค่าที่จอดรถ และภาษีมูลค่าเพิ่ม"
        },
        {
          title: "รับ-ส่ง สนามบิน",
          price: "ค่าบริการ: 3,000–3,500 บาท / เที่ยว",
          note: "รวมค่าน้ำมัน, ทางด่วน และค่าที่จอดรถ"
        }
      ]
    },
    en: {
      title: "Alphard Service Rates 2021-2023",
      rates: [
        {
          title: "Bangkok & Metropolitan Area - 5 Hours",
          price: "Rate: 3,900 THB",
          ot: "Overtime: 800 THB/hour",
          note: "Excludes fuel, toll fees, parking fees, and VAT"
        },
        {
          title: "Bangkok & Metropolitan Area - 10 Hours",
          price: "Rate: 5,500 THB",
          ot: "Overtime: 500 THB/hour",
          note: "Excludes fuel, toll fees, parking fees, and VAT"
        },
        {
          title: "Upcountry Travel (10 Hours/Day)",
          price: "Rate: 6,500 THB/day",
          ot: "Overtime: 500 THB/hour",
          extra: "Driver’s accommodation: 500 THB/night (if not provided)",
          note: "Excludes fuel, toll fees, parking fees, and VAT"
        },
        {
          title: "Airport Transfer",
          price: "Rate: 3,000–3,500 THB / trip",
          note: "Includes fuel, toll fees, and parking fees"
        }
      ]
    }
  };

    return (
    <section className="why-choose-us">
      <h2>{content[lang].title}</h2>
      <div className="service-rate">
        {content[lang].rates.map((rate, index) => (
          <div className="rate-box" key={index}>
            <h3>{rate.title}</h3>
            <p>{rate.price}</p>
            {rate.ot && <p>{rate.ot}</p>}
            {rate.extra && <p>{rate.extra}</p>}
            <p><em>{rate.note}</em></p>
          </div>
        ))}
      </div>
    </section>
  );
  
};

export default WhyChooseUs;


// import React from 'react';

// const WhyChooseUs = () => {
//   return (
//     <section className="why-choose-us">
//       <h2>ค่าบริการ Alphard 2021-2023</h2>
//       {/* <p>ใช้บริการในกรุงเทพ และปริมณฑล</p> */}

//       <div className="service-rate">
//         <div className="rate-box">
//           <h3>บริการในกรุงเทพและปริมณฑล 5 ชม.</h3>
//           <p>ค่าบริการ: 3,900 บาท</p>
//           <p>OT: 800 บาท/ชม.</p>
//           <p><em>ไม่รวมค่าน้ำมัน, ค่าทางด่วน, ค่าที่จอดรถ และภาษีมูลค่าเพิ่ม</em></p>
//         </div>
//         <div className="rate-box">
//           <h3>บริการในกรุงเทพและปริมณฑล 10 ชม.</h3>
//           <p>ค่าบริการ: 5,500 บาท</p>
//           <p>OT: 500 บาท/ชม.</p>
//           <p><em>ไม่รวมค่าน้ำมัน, ค่าทางด่วน, ค่าที่จอดรถ และภาษีมูลค่าเพิ่ม</em></p>
//         </div>
//         <div className="rate-box">
//           <h3>เดินทางต่างจังหวัด (10 ชม./วัน)</h3>
//           <p>ค่าบริการ: 6,500 บาท/วัน</p>
//           <p>OT: 500 บาท/ชม.</p>
//           <p>ค่าที่พักคนขับ: 500 บาท/คืน <br />(กรณีไม่มีที่พักให้คนขับ)</p>
//           <p><em>ไม่รวมค่าน้ำมัน, ค่าทางด่วน, ค่าที่จอดรถ และภาษีมูลค่าเพิ่ม</em></p>
//         </div>
//         {/* ✅ บริการรับ-ส่งสนามบิน */}
//         <div className="rate-box">
//           <h3>รับ-ส่ง สนามบิน</h3>
//           <p>ค่าบริการ: 3,000–3,500 บาท / เที่ยว</p>
//           <p><em>รวมค่าน้ำมัน, ทางด่วน และค่าที่จอดรถ</em></p>
//         </div>

//       </div>

//       {/* <p className="note">
//         ** อัตราดังกล่าวไม่รวมค่าน้ำมัน, ค่าทางด่วน, ค่าที่จอดรถ และภาษีมูลค่าเพิ่ม
//       </p> */}
      
//     </section>
//   );
// };

// export default WhyChooseUs;


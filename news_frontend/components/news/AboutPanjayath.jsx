import Image from 'next/legacy/image';
import React from 'react';
import map from '../../assets/map.png';
import Gallery from './Gallery';
import Link from 'next/link';

const AboutPanjayath = () => {
  const PANCHAYAT = [
    {
      name: "Chelakkara",
      localname: "ചേലക്കര",
      type: "Village Panchayat",
      villages: "Venganellur   Kurumala   Thonnurkara   Pangarappilly   Pulakode   Chelakkara (ct)",
      interpanchayat: "Pazhayannur",
      police: "04884 252 034",
      gov_hospital: "04882452778",
      gov_ayurvedhic: "04884254163",
      primary_health_center: "04884250828",
      block: "Pazhayannur",
      districtpanchayat: "Thrissur",
      state: "Kerala",
      lgdcode: "221881",
    },
  ];

  const wards = [
    { no: 1, name: "പഞ്ചായത്ത് ഓഫീസ്", mobile: "04884252037" },
    { no: 2, name: "വില്ലേജ് ഓഫീസ്", mobile: "8547614608" },
    { no: 3, name: "കൃഷിഭവൻ ", mobile: "94960 03577" },
    { no: 4, name: "K.S.E.B", mobile: "04884 252620" },
    { no: 5, name: "ഹെൽത്ത് സെന്റർ", mobile: "04882452778" },
    { no: 6, name: "ആയുർവേദ ആശുപത്രി", mobile: "04884254163" },
    { no: 7, name: "പോലീസ് സ്റ്റേഷൻ", mobile: "9497987138" },
    { no: 8, name: "ഫയർ സ്റ്റേഷൻ", mobile: "04884 236 101" },
    { no: 9, name: "ആംബുലൻസ്", mobile: "08460472724, 08401478342" },
    { no: 10, name: "അക്ഷയ സെന്റർ", mobile: "9400741488" },
  ];

  return (
    <div className='w-full flex flex-col gap-y-[14px] my-10'>
      {/* Title */}
      <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
        പഞ്ചായത്തിനെക്കുറിച്ച് അറിയാൻ
      </div>

      {/* Main content */}
      <div className='flex flex-col md:flex-row'>
        <div className='mx-10'>
          <Link href={"https://www.google.com/maps/place/Chelakkara+Grama+Panchayat/@10.6946443,76.3320972,815m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba7dd96a7347959:0x20a18f9dd7880b5e!8m2!3d10.694639!4d76.3346721!16s%2Fg%2F1262c8j0b!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D"} target={'/blank'} ><Image style={{ borderRadius: '15px' }} src={map} /></Link>
        </div>

        {/* Responsive Panchayat Details Table */}
        <div className='overflow-x-auto mx-10'>
          <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Detail</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Name</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].name}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Local Name</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].localname}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Type</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].type}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Villages</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].villages}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Inter Panchayat</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].interpanchayat}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Block</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].block}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>District Panchayat</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].districtpanchayat}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>State</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].state}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>LGD Code</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].lgdcode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-full flex flex-col gap-y-[1px] overflow-x-auto'>
        <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
          Sarpanch
        </div>
        <div className="flex flex-wrap justify-around gap-2 p-2">
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>President</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Eli Sapir" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Padmaja M K</h4>
            <h5>9744216167</h5>
            <h6>chelakkaragp@gmail.com</h6>
          </div>

          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Wise President</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Jonathan Kay" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Shaleel</h4>
            <h5>9744777731</h5>
            <h6>shaleel007@gmail.com</h6>
          </div>
        </div>
        <div className="flex flex-wrap justify-around gap-1 p-3">
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>A Asanar</h4>
            <h5>9447670329</h5>
            
          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>A K Asharaf</h4>
            <h5>9847143791</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Ambika K</h4>
            <h5>7902586527</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Beena Mathew</h4>
            <h5>9605577943</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Elsy</h4>
            <h5>9074637121</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Geetha Unnikrishnan</h4>
            <h5>9947546603</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Gopalakrishnan T</h4>
            <h5>9496347412</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Jaffarmon P A</h4>
            <h5>9744489201</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Kesavankutty T A</h4>
            <h5>9494527386</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Nithya</h4>
            <h5>9446230153</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>P C Manikandan</h4>
            <h5>9747021200</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Sasidharan</h4>
            <h5>9447919945</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Satheeshkumar M N</h4>
            <h5>9656522452</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Sujatha</h4>
            <h5>9526351579</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>Sumathi Modikal</h4>
            <h5>9539032140</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>V K Gopi</h4>
            <h5>9544207083</h5>

          </div>
          <div className="text-center max-w-xs">
            <b><h2 className='my-4'>Member</h2></b>
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
              <Image src="https://res.cloudinary.com/dqjocxss2/image/upload/v1728830550/femalelogo_s7epfi.png" alt="Serge Babyuk" width={70} height={70} className="object-cover rounded-full" />
            </div>
            <h4>V K Nirmala</h4>
            <h5>9847150578</h5>

          </div>
        </div>
        {/* <div className='flex flex-cols gap-2 text-white'>
                <a href='https://api.whatsapp.com/send?phone=+918943947138' target='_blank'>WhatsApp</a>
            </div> */}
      </div>
      <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
        പഞ്ചായത്തിലെ പ്രധാനപ്പെട്ട നമ്പറുകൾ
      </div>
      <div className="w-full p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-4 border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">പ്രധാനപ്പെട്ട  ഓഫീസുകൾ</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Mobile Numbers</th>
              </tr>
            </thead>
            <tbody>
              {wards.map((ward, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">{ward.no}</td>
                  <td className="border border-gray-300 px-2 py-2">{ward.name}</td>
                  <td className="border border-gray-300 px-2 py-2">{ward.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutPanjayath;
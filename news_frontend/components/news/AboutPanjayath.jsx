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

  const schoolData = [
    { id: 1, name: 'St Antonys Hs Ammadam', management: 'Govt Aided', category: 'Higher Secondary With Grades 6 To 12', boys: 787, girls: 688, teachers: 53, schoolCode: '32070401202' },
    { id: 2, name: 'Alps Pallipuram', management: 'Govt Aided', category: 'Primary Only With Grades 1 To 5', boys: 50, girls: 45, teachers: 6, schoolCode: '32070401301' },
    { id: 3, name: 'Alps Chenam', management: 'Govt Aided', category: 'Primary Only With Grades 1 To 5', boys: 22, girls: 21, teachers: 6, schoolCode: '32070401101' },
    { id: 4, name: 'Mahatma Lps Paralam', management: 'Govt Aided', category: 'Primary Only With Grades 1 To 5', boys: 20, girls: 15, teachers: 6, schoolCode: '32070401201' },
    { id: 5, name: 'Calps Venginissery', management: 'Govt Aided', category: 'Primary Only With Grades 1 To 5', boys: 143, girls: 59, teachers: 10, schoolCode: '32070401401' },
    { id: 6, name: 'Gurukulam Public School Venginissery', management: 'Private Unaided', category: 'Higher Secondary With Grades 1 To 12', boys: 574, girls: 432, teachers: 49, schoolCode: '32070401102' },
    { id: 7, name: 'Glps Ammadam', management: 'Department Of Education', category: 'Primary Only With Grades 1 To 5', boys: 108, girls: 100, teachers: 9, schoolCode: '32070401801' },
    { id: 8, name: 'Santhwanam Buds School Venginissery', management: 'Private Unaided', category: 'Secondary/sr. Sec. With Grades 1 To 10', boys: 40, girls: 24, teachers: 4, schoolCode: '32070407601' },
    { id: 9, name: 'St Antonys Ups Kodannur', management: 'Govt Aided', category: 'Upper Primary With Grades 1 To 8', boys: 214, girls: 183, teachers: 14, schoolCode: '32070400901' },
  ];

  const members = [
    { name: "Padmaja M K", designation: "President", mobile: "9744216167", email: "chelakaragp@gmail.com" },
    { name: "Shaleel", designation: "Vice President", mobile: "9744777731", email: "shaleel007@gmail.com" },
    { name: "A Asanar", designation: "Member", mobile: "9447670329", email: "chelakaragp@gmail.com" },
    { name: "A K Asharaf", designation: "Member", mobile: "9847143791", email: "chelakaragp@gmail.com" },
    { name: "Ambika K", designation: "Member", mobile: "7902586527", email: "chelakaragp@gmail.com" },
    { name: "Beena Mathew", designation: "Member", mobile: "9605577943", email: "chelakaragp@gmail.com" },
    { name: "Elsy", designation: "Member", mobile: "9074637121", email: "chelakaragp@gmail.com" },
    { name: "Geetha Unnikrishnan", designation: "Member", mobile: "9947545603", email: "chelakaragp@gmail.com" },
    { name: "Gopalakrishnan T", designation: "Member", mobile: "9496347412", email: "chelakaragp@gmail.com" },
    { name: "Jaffarmon P A", designation: "Member", mobile: "9744489201", email: "chelakaragp@gmail.com" },
    { name: "Kesavankutty T A", designation: "Member", mobile: "9449527386", email: "chelakaragp@gmail.com" },
    { name: "Nithya", designation: "Member", mobile: "9446203153", email: "chelakaragp@gmail.com" },
    { name: "P C Manikandan", designation: "Member", mobile: "9747021010", email: "chelakaragp@gmail.com" },
    { name: "Sasidharan", designation: "Member", mobile: "9447919945", email: "chelakaragp@gmail.com" },
    { name: "Satheeshkumar M N", designation: "Member", mobile: "9656522452", email: "sathees91m2@gmail.com" },
    { name: "Sujatha", designation: "Member", mobile: "9526315779", email: "chelakaragp@gmail.com" },
    { name: "Sumathi Modikal", designation: "Member", mobile: "9539032140", email: "chelakaragp@gmail.com" },
    { name: "V K Gopi", designation: "Member", mobile: "9544207083", email: "chelakaragp@gmail.com" },
    { name: "V K Nirmala", designation: "Member", mobile: "9847150578", email: "nirmalavk2005@gmail.com" },
  ];

  const wards = [
    { no: 1, name: "Venganellur Padinjattumury", wardNo: 1, lgdCode: "1458336" },
    { no: 2, name: "Venganellur North", wardNo: 2, lgdCode: "1458337" },
    { no: 3, name: "Methuku", wardNo: 3, lgdCode: "1458338" },
    { no: 4, name: "Nattianchira", wardNo: 4, lgdCode: "1458339" },
    { no: 5, name: "Venganellur Kizhakkumury", wardNo: 5, lgdCode: "1458340" },
    { no: 6, name: "Meppadam", wardNo: 6, lgdCode: "1458341" },
    { no: 7, name: "Pulakode Vadakkumury", wardNo: 7, lgdCode: "1458342" },
    { no: 8, name: "Pulakode Thekkumury", wardNo: 8, lgdCode: "1458343" },
    { no: 9, name: "Adakkode", wardNo: 9, lgdCode: "1458344" },
    { no: 10, name: "Panamkutti", wardNo: 10, lgdCode: "1458345" },
    { no: 11, name: "Kaliyaraod", wardNo: 11, lgdCode: "1458346" },
    { no: 12, name: "Pangarappilly", wardNo: 12, lgdCode: "1458347" },
    { no: 13, name: "Anthimahakalanakavu", wardNo: 13, lgdCode: "1458348" },
    { no: 14, name: "Pathukudy", wardNo: 14, lgdCode: "1458349" },
    { no: 15, name: "Vattully", wardNo: 15, lgdCode: "1458350" },
    { no: 16, name: "Kurumala", wardNo: 16, lgdCode: "1458351" },
    { no: 17, name: "Thottekode", wardNo: 17, lgdCode: "1458352" },
    { no: 18, name: "Thoonorkkara", wardNo: 18, lgdCode: "1458353" },
    { no: 19, name: "Thoonorkkara West", wardNo: 19, lgdCode: "1458354" },
    { no: 20, name: "Parappuram", wardNo: 20, lgdCode: "1458355" },
    { no: 21, name: "Chelakkara", wardNo: 21, lgdCode: "1458356" },
    { no: 22, name: "Chelakkara North", wardNo: 22, lgdCode: "1458357" },
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
                <td className="border border-gray-300 px-4 py-2"><strong>Police Station</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].police}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Govt Hospital</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].gov_hospital}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Primary Health center</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].primary_health_center}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Govt Ayurvedic</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].gov_ayurvedhic}</td>
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
        <Gallery />
      </div>

      <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
        വാർഡുകൾ
      </div>
      <div className="w-full p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Ward Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Ward No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">LGD Code</th>
              </tr>
            </thead>
            <tbody>
              {wards.map((ward, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">{ward.no}</td>
                  <td className="border border-gray-300 px-4 py-2">{ward.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{ward.wardNo}</td>
                  <td className="border border-gray-300 px-4 py-2">{ward.lgdCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
        മെമ്പേഴ്‌സ്
      </div>
      <div className="w-full p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Mobile No</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.designation}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.mobile}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-full p-4'>
        {/* <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
          പാറളം പഞ്ചായത്തിലെ സ്‌കൂളുകൾ
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Management</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Boys</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Girls</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Teachers</th>
                <th className="border border-gray-300 px-4 py-2 text-left">School Code</th>
              </tr>
            </thead>
            {/* <tbody>
              {schoolData.map((school) => (
                <tr key={school.id}>
                  <td className="border border-gray-300 px-4 py-2">{school.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.management}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.boys}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.girls}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.teachers}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.schoolCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPanjayath;
import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [news, setnews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      let x = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F");
      let data = await x.json();
      setnews(data.items)
    }

    fetchNews();
  }, []);

  return (
    <>
      <div className=" py-6 w-full h-dvh bg-black text-white overflow-auto max-sm:max-w-screen-sm">
        <div className=" mx-6 h-full w-auto max-sm:max-w-screen-sm max-sm:mx-0">
          <div className="container inline justify-center items-center text-center">
            <h1 className=" font-serif text-3xl font-bold">Tech News</h1>
            <div className=" mb-1 ">
              <ul className="pt-10 px-[200px] text-lg max-sm:px-5">
                {news.map((item) => (
                  <li key={item.guid} className="border-b mb-10">
                    <div className=" flex justify-between">
                      <h3 className=" italic font-semibold">{item.author}</h3>
                      <p>{item.pubDate}</p>
                    </div>
                    <h1 className=" text-xl font-bold pt-5 pb-8 underline">
                      {item.title}
                    </h1>
                    <p className=" text-base px-16 font-normal pb-8">
                      {item.description}
                    </p>
                    <div className=" text-right -mt-5 underline italic mb-5">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">Read more</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;




// import { useState, useEffect } from "react";
// import { SpeedInsights } from "@vercel/speed-insights/react";

// function App() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F"
//         );
//         const data = await response.json();
//         setNews(data.items);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <>
//       <div className="py-6 w-full h-dvh bg-black text-white overflow-auto max-sm:max-w-screen-sm">
//         <div className="mx-6 h-full w-auto max-sm:max-w-screen-sm max-sm:mx-0">
//           <div className="container inline justify-center items-center text-center">
//             <h1 className="font-serif text-3xl font-bold">Tech News</h1>
//             <div className="mb-1">
//               <ul className="pt-10 px-[200px] text-lg max-sm:px-5">
//                 {news.map((item) => (
//                   <li key={item.guid} className="border-b mb-10">
//                     <div className="flex justify-between">
//                       <h3 className="italic font-semibold">{item.author}</h3>
//                       <p>{item.pubDate}</p>
//                     </div>
//                     <h1 className="text-xl font-bold pt-5 pb-8 underline">
//                       {item.title}
//                     </h1>
//                     <p className="text-base px-16 font-normal pb-8">
//                       {item.description}
//                     </p>
//                     <div className="text-right -mt-5 underline italic mb-5 hover:text-blue-700">
//                       <a
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Read more
//                       </a>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

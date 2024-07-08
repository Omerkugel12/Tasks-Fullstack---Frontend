// import React from "react";
// import { Skeleton } from "../ui/skeleton";

// function CardsSkeleton() {
//   return (
//     <div className="flex flex-wrap gap-4 justify-center">
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-3">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//         <div className="space-y-2">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardsSkeleton;

import React from "react";
import { Skeleton } from "../ui/skeleton";

function CardsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] sm:h-[150px] sm:w-[300px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] sm:w-[300px]" />
            <Skeleton className="h-4 w-[200px] sm:w-[250px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsSkeleton;

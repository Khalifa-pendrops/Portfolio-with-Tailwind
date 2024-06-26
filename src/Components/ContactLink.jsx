import React, { useState } from "react";

export default function ContactLink({ phoneNumber }) {
  const [isAvailable, setIsAvailable] = useState(true);

  // const ContactLink = () => {
  //     const phoneNumber = "+2348139308197";

  return (
    <div>
      {isAvailable ? (
        <a href={`tel:${phoneNumber}`}>+2348139308197</a>
      ) : (
        <span>Currently unavailable</span>
      )}
    </div>
  );
}
// }

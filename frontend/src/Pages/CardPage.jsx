import React from "react";
import CreepyFlavorCard from "../components/Card.jsx";
 const img = "https://www.thespruceeats.com/thmb/QFQi06_vNQAxhPN3DKbWnrNhpbo=/600x400/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate-chip-ice-cream-stracciatella-4051257-hero-01-9e6e120c10d2430cbbbcfee7d76a5011.jpg"
const dummyData = {
  name: "Garlic Marshmallow",
  image: img,
  description: "A sweet and savory delight with a punch of garlic flavor.",
  likes: 42,
  dislikes: 13,
};

const CardPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <CreepyFlavorCard flavor={dummyData} />
    </div>
  );
};

export default CardPage;

export const tags = ['cheapest', 'best-price', 'lowest-clean-fee'];
export const emojis = ['😊', '🌟', '💰', '🏡', '🔥', '🌈', '🌍', '🚀', '⭐', '🎉'];

// export tags and emojis in an object with alias name misc (use Export “as”)
export function convertNumber(number) {
  let newnum = number.replace('$', '');
  newnum = newnum.replace(',', '');
  let num = parseFloat(newnum);

  return num;
}

// export promotionPercentCalc
export function promotionPercentCalc(price, promotionPrice) {
  // round 2 decimal
  let newprice = convertNumber(price)
  let newpro = convertNumber(promotionPrice)
  let persent = (((newprice - newpro)/newprice)*100).toFixed(2);

  return persent;
  
}





// export default hotels
export const hotels = [
  {
    name: 'Stylish Beachfront 6BR Villa | Private pool Sunset',
    address: 'Entire villa in Ngũ Hành Sơn, Vietnam',
    description:
      'Imagine waking up to the sound of waves crashing against the shore, taking a dip in your very own private pool, and having access to some of the most beautiful beaches in the world. This is exactly what you can experience at THE OCEAN VILLAS, a five-star resort located in the heart of Vietnam.',
    cleaningFee: '$20',
    price: '$1,700',
    promotionPrice: '$1,360',
  },
  {
    name: 'Luxury Beachfront Resort & Spa',
    address: 'Private room in Da Nang, Vietnam',
    description:
      'Escape to a tropical paradise at our luxury beachfront resort & spa. Indulge in world-class amenities, breathtaking ocean views, and exquisite dining experiences. Whether you seek relaxation or adventure, our resort offers the perfect blend of both.',
    cleaningFee: '$25',
    price: '$1,200',
    promotionPrice: '$960',
  },
  {
    name: 'Cozy Retreat with Mountain View',
    address: 'Entire cabin in Sapa, Vietnam',
    description:
      'Experience the charm of Sapa in our cozy retreat nestled in the mountains. Enjoy the serene surroundings, crisp mountain air, and stunning views. Our cabin provides a perfect escape for nature lovers and those seeking a peaceful getaway.',
    cleaningFee: '$15',
    price: '$800',
    promotionPrice: '$640',
  },
  {
    name: 'Urban Oasis - Modern City View Apartment',
    address: 'Entire apartment in Ho Chi Minh City, Vietnam',
    description:
      'Discover the vibrant energy of Ho Chi Minh City from our modern city view apartment. Located in the heart of the city, our space offers stylish design, convenient access to popular attractions, and stunning views of the urban skyline.',
    cleaningFee: '$18',
    price: '$950',
    promotionPrice: '$760',
  },
  {
    name: 'Historic Colonial House | Old Quarter Charm',
    address: 'Entire house in Hanoi, Vietnam',
    description:
      "Step back in time with our historic colonial house in the heart of Hanoi's Old Quarter. Immerse yourself in the charm of traditional architecture, explore nearby cultural landmarks, and indulge in the rich history of Vietnam's capital city.",
    cleaningFee: '$22',
    price: '$1,100',
    promotionPrice: '$880',
  },
  {
    name: 'Riverside Retreat - Tranquil Waterfront Cabin',
    address: 'Entire cabin in Hue, Vietnam',
    description:
      'Escape the hustle and bustle in our riverside retreat. Nestled along the tranquil waterfront of the Perfume River, our cabin offers a serene setting, picturesque views, and easy access to historical sites and natural beauty.',
    cleaningFee: '$17',
    price: '$850',
    promotionPrice: '$680',
  },
  {
    name: 'Zen Garden Villa | Private Pool & Spa',
    address: 'Entire villa in Hoi An, Vietnam',
    description:
      'Experience true relaxation in our Zen Garden Villa in Hoi An. Unwind in the private pool, stroll through lush gardens, and rejuvenate your senses at the spa. Our villa is a peaceful oasis, yet just a short distance from the ancient town.',
    cleaningFee: '$30',
    price: '$1,500',
    promotionPrice: '$1,200',
  },
  {
    name: 'Mountain View Resort | Eco-Friendly Retreat',
    address: 'Entire resort in Da Nang, Vietnam',
    description:
      'Embark on an eco-friendly retreat at our mountain view resort. Surrounded by nature, our resort offers sustainable accommodations, breathtaking mountain views, and a variety of outdoor activities. Immerse yourself in the beauty of the natural landscape.',
    cleaningFee: '$28',
    price: '$1,300',
    promotionPrice: '$1,040',
  },
  {
    name: 'Charming Lakeside Cottage | Dalat Escape',
    address: 'Entire cottage in Da Lat, Vietnam',
    description:
      'Find tranquility by the lake in our charming lakeside cottage. Escape to the cool climate of Dalat, explore flower gardens, and relax in the cozy atmosphere of our cottage. Perfect for a romantic getaway or a peaceful retreat.',
    cleaningFee: '$19',
    price: '$900',
    promotionPrice: '$720',
  },
  {
    name: 'Skyline View Penthouse | Central Location',
    address: 'Entire penthouse in Nha Trang, Vietnam',
    description:
      'Enjoy panoramic views of the Nha Trang skyline from our luxurious penthouse. Centrally located, our penthouse offers modern amenities, spacious living areas, and easy access to the beach and popular attractions. Experience the epitome of urban living.',
    cleaningFee: '$23',
    price: '$1,250',
    promotionPrice: '$1,000',
  },
];

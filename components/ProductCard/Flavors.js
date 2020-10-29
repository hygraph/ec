import FlavorRating from "./FlavorRating";

const Flavors = ({ flavors, className }) => {
  const { fruity, tannin, sweet, acidity } = flavors;
  return (
    <div className={`${className}`}>
      <FlavorRating
        labelA="Light"
        labelB="Bold"
        rating={fruity}
        className="mb-3"
      />
      <FlavorRating
        labelA="Smooth"
        labelB="Tannic"
        rating={tannin}
        className="mb-3"
      />
      <FlavorRating
        labelA="Dry"
        labelB="Sweet"
        rating={sweet}
        className="mb-3"
      />
      <FlavorRating
        labelA="Neutral"
        labelB="Acidic"
        rating={acidity}
        className="mb-3"
      />
    </div>
  );
};

export default Flavors;

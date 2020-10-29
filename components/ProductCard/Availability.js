import {
  AvailabilityContainer,
  AvailabilityTemplate,
} from "@commercelayer/react-components";

const Availability = ({ className, skuCode }) => {
  return (
    <div className={`absolute inline-block ${className}`}>
      <AvailabilityContainer skuCode={skuCode}>
        <p className="px-4 bg-gray-200 rounded-full">Available</p>{" "}
        <span className="absolute top-0 right-0 inline-flex w-2 h-2 bg-green-400 rounded-full opacity-75 animate-ping" />
        <AvailabilityTemplate>
          {({ quantity }) => {
            if (quantity > 10) {
              return (
                <span className="absolute top-0 right-0 inline-flex w-2 h-2 bg-green-400 rounded-full" />
              );
            }
            return (
              <span className="absolute top-0 right-0 inline-flex w-2 h-2 bg-red-400 rounded-full" />
            );
          }}
        </AvailabilityTemplate>
      </AvailabilityContainer>
    </div>
  );
};

export default Availability;

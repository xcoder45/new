import PropTypes from "prop-types";

const Booking = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[133px] h-[123px] text-right text-base text-primary-color font-button-text ${className}`}
    >
      <img
        className="absolute h-[39.02%] w-[37.59%] top-[0%] right-[31.2%] bottom-[60.98%] left-[31.2%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-132.svg"
      />
      <div className="absolute top-[62px] left-[22px] leading-[16px]">
        BOOK WITH
      </div>
      <div className="absolute top-[82px] left-[0px] text-11xl tracking-[0.03em] leading-[30px] uppercase font-medium font-heading1">
        Only 20%
      </div>
      <div className="absolute top-[125px] left-[30px] rounded-smi bg-primary-color w-[73px] h-[5px] opacity-[0.12]" />
    </div>
  );
};

Booking.propTypes = {
  className: PropTypes.string,
};

export default Booking;

import PropTypes from "prop-types";

const Payment = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0.2px] left-[293px] w-[145px] h-[122.6px] text-right text-base text-primary-color font-button-text ${className}`}
    >
      <img
        className="absolute h-[38.83%] w-[32.07%] top-[0%] right-[34%] bottom-[61.17%] left-[33.93%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      />
      <div className="absolute top-[61.6px] left-[15.5px] leading-[16px]">
        PAYMENT PLAN
      </div>
      <div className="absolute top-[81.6px] left-[0px] text-11xl tracking-[0.03em] leading-[30px] uppercase font-medium font-heading1">
        Easy 70/30
      </div>
      <div className="absolute top-[124.6px] left-[36px] rounded-smi bg-primary-color w-[73px] h-[5px] opacity-[0.12]" />
    </div>
  );
};

Payment.propTypes = {
  className: PropTypes.string,
};

export default Payment;

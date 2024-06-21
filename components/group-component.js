import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  group133,
  floating,
  pools,
  propWidth,
  propWidth1,
  propHeight,
}) => {
  const floatingPoolsStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[227px] h-[271px] text-center text-sm text-primary-color font-button-text ${className}`}
    >
      <div className="absolute top-[114px] left-[0px] shadow-[0px_14px_34px_-10px_rgba(125,_125,_125,_0.35)] rounded-xl bg-body-text-2 w-[227px] h-[157px]" />
      <img
        className="absolute top-[0px] left-[8px] w-[206px] h-[199.5px] object-contain"
        alt=""
        src={group133}
      />
      <div
        className="absolute top-[212px] left-[84.5px] leading-[20px] font-semibold"
        style={floatingPoolsStyle}
      >
        <p className="m-0">{floating}</p>
        <p className="m-0">{pools}</p>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  group133: PropTypes.string,
  floating: PropTypes.string,
  pools: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight: PropTypes.any,
};

export default GroupComponent;

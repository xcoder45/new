import { useMemo } from "react";
import PropTypes from "prop-types";

const FeatureCard = ({
  className = "",
  group16,
  hANDOVERON,
  q22027,
  propWidth,
  propDisplay,
  propMinWidth,
  propMinWidth1,
  propTextTransform,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const hANDOVERONStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const q22027Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      textTransform: propTextTransform,
    };
  }, [propMinWidth1, propTextTransform]);

  return (
    <div
      className={`absolute top-[0.7px] left-[598px] w-[114px] h-[121.6px] text-right text-base text-primary-color font-button-text ${className}`}
      style={frameDivStyle}
    >
      <img
        className="absolute top-[0px] left-[30.8px] w-[52.4px] h-[46.6px]"
        alt=""
        src={group16}
      />
      <div
        className="absolute top-[61.6px] left-[0px] leading-[16px]"
        style={hANDOVERONStyle}
      >
        {hANDOVERON}
      </div>
      <div
        className="absolute top-[81.6px] left-[5.5px] text-11xl tracking-[0.03em] leading-[30px] font-medium font-heading1"
        style={q22027Style}
      >
        {q22027}
      </div>
      <div className="absolute top-[124.6px] left-[20.5px] rounded-smi bg-primary-color w-[73px] h-[5px] opacity-[0.12]" />
    </div>
  );
};

FeatureCard.propTypes = {
  className: PropTypes.string,
  group16: PropTypes.string,
  hANDOVERON: PropTypes.string,
  q22027: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propTextTransform: PropTypes.any,
};

export default FeatureCard;

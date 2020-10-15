import React, { FC } from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const NextArrowIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
      <Svg width={39} height={39} viewBox="0 0 39 39" fill="none">
        <Circle cx={19.5} cy={19.5} r={19.5} fill="#fff" />
        <Path
          d="M20 9l-1.762 1.762 6.974 6.988H10v2.5h15.212l-6.974 6.988L20 29l10-10L20 9z"
          fill="#C02957"
        />
      </Svg>
    );
};
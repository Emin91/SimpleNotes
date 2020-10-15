import React, { FC } from "react"
import Svg, { Circle } from "react-native-svg"

export const DotsIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
      <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
        <Circle cx={4} cy={4} r={4} fill="#FEFEFE" />
        <Circle cx={4} cy={15} r={4} fill="#FEFEFE" />
        <Circle cx={15} cy={4} r={4} fill="#FEFEFE" />
        <Circle cx={15} cy={15} r={4} fill="#FEFEFE" />
      </Svg>
    );
};
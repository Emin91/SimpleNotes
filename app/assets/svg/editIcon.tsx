import React, { FC } from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const EditIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
      <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <Circle cx={11} cy={11} r={11} fill="#FACE1F" />
        <Path
          d="M6 13.917V16h2.083l6.144-6.144-2.083-2.083L6 13.917zm9.838-5.671a.553.553 0 000-.784l-1.3-1.3a.553.553 0 00-.784 0L12.739 7.18l2.083 2.083 1.017-1.016z"
          fill="#fff"
        />
      </Svg>
    );
};
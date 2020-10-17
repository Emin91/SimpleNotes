import React, { FC } from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const FavIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
      <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <Circle cx={11} cy={11} r={11} fill="#2980B9" />
        <Path
          d="M13.946 5.5H8.054c-.649 0-1.173.55-1.173 1.222L6.875 16.5 11 14.667l4.125 1.833V6.722c0-.672-.53-1.222-1.179-1.222z"
          fill="#fff"
        />
      </Svg>
    );
};
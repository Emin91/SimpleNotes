import React, { FC } from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const DeleteIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
      <Svg width={23} height={22} viewBox="0 0 23 22" fill="none">
        <Circle cx={11.75} cy={11} r={11} fill="#E74C3C" />
        <Path
          d="M8.214 15.278c0 .672.53 1.222 1.179 1.222h4.714c.648 0 1.179-.55 1.179-1.222V7.944H8.214v7.334zm7.661-9.167h-2.063l-.589-.611h-2.946l-.59.611H7.626v1.222h8.25V6.111z"
          fill="#fff"
        />
      </Svg>
    );
};
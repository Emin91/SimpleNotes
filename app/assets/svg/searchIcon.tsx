import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const SearchIcon: FC<{ width?: number, height?: number }> = ({ width, height }) => {
    return (
      <Svg width={17} height={17} viewBox="0 0 17 17" fill="none">
      <Path
        d="M12.15 10.692h-.768l-.272-.263a6.29 6.29 0 001.526-4.111 6.318 6.318 0 10-6.318 6.318 6.29 6.29 0 004.111-1.526l.263.272v.768l4.86 4.85L17 15.552l-4.85-4.86zm-5.832 0a4.368 4.368 0 01-4.374-4.374 4.368 4.368 0 014.374-4.374 4.368 4.368 0 014.374 4.374 4.368 4.368 0 01-4.374 4.374z"
        fill="#2D254A"
      />
    </Svg>
    );
};
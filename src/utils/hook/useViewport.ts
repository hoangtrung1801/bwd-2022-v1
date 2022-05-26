import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"

export const useViewport = () => {
    const isDesktop = useMediaQuery({minWidth: 1024});
    const isTablet = useMediaQuery({minWidth: 769, maxWidth: 1023});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isMobileTablet = useMediaQuery({maxWidth: 1023});

    return {isDesktop, isTablet, isMobile, isMobileTablet};
}
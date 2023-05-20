import { ReactElement, useEffect, useState } from "react";
import type { useGetIconProps } from "./useIconGetter.type";

export const useIconGetter = () => {
  const Icon: React.FC<useGetIconProps> = ({ icon, svgProps, onClick }) => {
    const [IconComponent, setIconComponent] = useState<ReactElement>(<></>);

    useEffect(() => {
      async function importAsynchronouslyIcon() {
        try {
          const { default: SelectedIcon } = await import(`../../images/svgs/${icon}`);

          const iconWithProps = (
            <SelectedIcon {...svgProps} onClick={onClick} />
          );

          setIconComponent(iconWithProps);
        } catch (error) {
          console.error(
            `The icon '${icon}' was not added in components/Icons` + error
          );
        }
      }

      icon && importAsynchronouslyIcon();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [icon, svgProps]);

    return IconComponent;
  };

  return { Icon };
};

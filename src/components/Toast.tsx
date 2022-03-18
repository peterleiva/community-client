import clsx from "clsx";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { GrClose as CloseIcon } from "react-icons/gr";
import { GoAlert as AlertIcon } from "react-icons/go";
import { MdInfo as InfoIcon, MdError as ErrorIcon } from "react-icons/md";
import { BsFillCheckCircleFill as SuccessIcon } from "react-icons/bs";

type ToastTheme = keyof typeof themes;

interface ToastProps {
  /**
   * change toast theme
   * @default "info"
   */
  theme: ToastTheme;
  /**
   * header text which appears on top
   */
  title: string;
  /**
   * more detailing about the reason the toast is appearing. Supports markdown
   */
  description?: string;
  /**
   * where to get more information about the message
   */
  linkTo?: string;
  /**
   * label from link, it's rendered about to get more info
   */
  linkLabel?: string;
  /**
   * auto close the toast after expires the timeout
   * @default false
   */
  autoClose?: boolean;
  /**
   * @default 2_0000
   * specifiy the time in miliseconds to close the toast
   */
  timeout?: number;
  /**
   * additional css classes to Toast container
   */
  className?: string;
  onClose?: () => void;
}

const CloseButton = (props: JSX.IntrinsicElements["button"]) => (
  <button {...props}>
    <CloseIcon />
  </button>
);

export default function Toast({
  theme = "info",
  title,
  description = "",
  linkTo,
  linkLabel,
  className,
  onClose,
}: ToastProps) {
  const [icon, { text: themeText }] = createTheme(theme);

  const linkCss = clsx(themeText, "transition duration-150 hover:opacity-80");

  return (
    <div
      className={clsx(
        className,
        "flex flex-row gap-3 relative rounded-lg border border-solid border-slate-200 bg-slate-50 py-5 pl-3 pr-8"
      )}
    >
      <CloseButton className="absolute right-4 top-4" onClick={onClose} />
      <div className="-mt-2">{icon}</div>
      <div className="flex flex-col gap-1">
        <h1 className="text-base text-slate-700 m-0">{title}</h1>
        <Markdown
          options={{
            overrides: {
              a: {
                props: {
                  className: linkCss,
                },
              },
            },
          }}
        >
          {description}
        </Markdown>
        {linkTo && (
          <Link href={linkTo} passHref>
            <a href="dummy" className={clsx(linkCss, "font-bold")}>
              {linkLabel}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

const themes = {
  success: {
    text: "text-emerald-500",
    light: "text-emerald-400",
    bg: "bg-emerald-100",
  },

  info: {
    text: "text-blue-600",
    light: "text-blue-500",
    bg: "bg-blue-100",
  },

  warning: {
    text: "text-orange-400",
    light: "text-orange-300",
    bg: "bg-orange-100",
  },

  error: {
    text: "text-rose-500",
    light: "text-rose-400",
    bg: "bg-rose-100",
  },
};

type IconProps = {
  primary: string;
  background: string;
  renderIcon: JSX.Element;
};

const Icon = ({ primary, background, renderIcon }: IconProps) => {
  return (
    <div
      className={clsx(
        "p-3 flex items-center rounded-full text-xl mr-3",
        primary,
        background
      )}
    >
      {renderIcon}
    </div>
  );
};

/**
 * create themes assets. returns a pair of icon and classNames for link objects
 */
const createTheme = (
  theme: ToastTheme
): [JSX.Element, typeof themes[ToastTheme]] => [
  iconTheme[theme],
  themes[theme],
];

const iconTheme: { [theme in ToastTheme]: JSX.Element } = {
  success: (
    <Icon
      renderIcon={<SuccessIcon />}
      primary={themes.success.text}
      background={themes.success.bg}
    />
  ),
  info: (
    <Icon
      renderIcon={<InfoIcon />}
      primary={themes.info.text}
      background={themes.info.bg}
    />
  ),
  warning: (
    <Icon
      renderIcon={<AlertIcon />}
      primary={themes.warning.text}
      background={themes.warning.bg}
    />
  ),
  error: (
    <Icon
      renderIcon={<ErrorIcon />}
      primary={themes.error.text}
      background={themes.error.bg}
    />
  ),
};

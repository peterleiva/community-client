import clsx from "clsx";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { GrClose as CloseIcon } from "react-icons/gr";
import { GoAlert as AlertIcon } from "react-icons/go";
import { MdInfo as InfoIcon, MdError as ErrorIcon } from "react-icons/md";
import { BsFillCheckCircleFill as SuccessIcon } from "react-icons/bs";
import { motion, type Variants } from "framer-motion";
import useThrottle from "lib/useThrottle";

type ToastTheme = keyof typeof themes;

interface ToastProps {
  /**
   * header text which appears on top
   */
  title: string;
  /**
   * change toast theme
   * @default "info"
   */
  theme?: ToastTheme;
  /**
   * more detailing about the reason the toast is appearing. Supports markdown
   */
  description?: string;
  /**
   * where to get more information about the message
   * TODO: change to action
   */
  linkTo?: string;
  /**
   * label from link, it's rendered about to get more info
   */
  linkLabel?: string;
  /**
   * hide automatically the toast after expires the timeout, given by wait
   * @default true
   */
  autohide?: boolean;
  /**
   * specifiy the time in miliseconds to close the toast
   * @default 5_0000
   */
  wait?: number;
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

const animation: Variants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Toast({
  theme = "info",
  title,
  description = "",
  linkTo,
  linkLabel,
  className,
  onClose,
  autohide = true,
  wait = 5_000,
}: ToastProps) {
  useThrottle(() => autohide && onClose?.(), { wait });

  const [icon, { text: themeText }] = createTheme(theme);

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      transition={{
        type: "spring",
        damping: 13,
      }}
      className={clsx(
        "relative flex flex-row gap-3 rounded-lg border border-solid border-slate-200 bg-slate-50 py-5 pl-3 pr-12",
        className
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
                  className: themeText,
                },
              },
            },
          }}
        >
          {description}
        </Markdown>
        {linkTo && (
          <Link href={linkTo} passHref>
            <motion.a
              href="dummy"
              className={clsx(themeText, "font-bold")}
              whileHover={{ opacity: 0.7, transition: { duration: 0.15 } }}
            >
              {linkLabel}
            </motion.a>
          </Link>
        )}
      </div>
    </motion.div>
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

import React from "react";

export const Square2StackIcon = ({
  fill,
  size,
  height,
  width,
  ...props
}: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const ArrowRightDouble = ({
  fill,
  size,
  height,
  width,
  ...props
}: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TShirt = ({ fill, size, height, width, ...props }: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      // viewBox="0 0 24 24"
      viewBox="0 0 60.674 60.674"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M46.682,6.95c-0.675-0.675-1.813-1.147-2.768-1.147h-5.818c-0.134,0-1.318,0.04-1.516,1.438
        c-0.02,0.14-0.05,0.351-0.121,0.56c-0.473,1.384-2.979,2.815-6.353,2.815s-5.88-1.432-6.353-2.815
        c-0.408-1.194-1.446-1.997-2.584-1.997h-5.397c-0.627,0-0.627,0-6.953,6.322l-8.086,8.082C0.261,20.68,0.001,21.308,0,21.975
        c0,0.669,0.259,1.297,0.732,1.77l7.714,7.716c0.944,0.945,2.59,0.945,3.536,0l2.289-2.29v23.2c0,1.379,1.122,2.5,2.5,2.5h26.854
        c1.378,0,2.5-1.121,2.5-2.5V28.892l2.568,2.568c0.944,0.945,2.591,0.945,3.535,0l7.714-7.716c0.472-0.472,0.732-1.1,0.732-1.768
        s-0.26-1.296-0.732-1.767L46.682,6.95z M10.214,28.985l-7.007-7.008c0.571-0.571,1.199-1.199,1.857-1.857l7.103,6.912
        L10.214,28.985z M44.924,24.252c-0.894,0-1.799,0.692-1.799,2.018v25.601H17.271V26.548c0-1.325-0.905-2.017-1.799-2.017
        c-0.367,0-0.919,0.115-1.469,0.664l-1.128,1.129l-7.103-6.911C9.87,15.316,14.91,10.28,16.39,8.805h4.536
        c0.993,2.835,4.76,4.813,9.18,4.813s8.188-1.978,9.18-4.813h4.628c0.162,0.002,0.531,0.155,0.647,0.268l10.473,10.472
        l-7.103,6.911l-1.538-1.54C45.844,24.367,45.291,24.252,44.924,24.252z M50.46,28.985l-1.823-1.823l7.104-6.912l1.727,1.727
        L50.46,28.985z"
        // stroke={fill}
        fill={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Album = ({ fill, size, height, width, ...props }: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 20 20"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 18h10v-.26c1.52.4 3.17.35 4.76-.24 4.14-1.52 6.27-6.12 4.75-10.26-1.43-3.89-5.58-6-9.51-4.98V2H0v16zM9 3v14H1V3h8zm5.45 8.22c-.68 1.35-2.32 1.9-3.67 1.23-.31-.15-.57-.35-.78-.59V8.13c.8-.86 2.11-1.13 3.22-.58 1.35.68 1.9 2.32 1.23 3.67zm-2.75-.82c.22.16.53.12.7-.1.16-.22.12-.53-.1-.7s-.53-.12-.7.1c-.16.21-.12.53.1.7zm3.01 3.67c-1.17.78-2.56.99-3.83.69-.27-.06-.44-.34-.37-.61s.34-.43.62-.36l.17.04c.96.17 1.98-.01 2.86-.59.47-.32.86-.72 1.14-1.18.15-.23.45-.3.69-.16.23.15.3.46.16.69-.36.57-.84 1.08-1.44 1.48zm1.05 1.57c-1.48.99-3.21 1.32-4.84 1.06-.28-.05-.47-.32-.41-.6.05-.27.32-.45.61-.39l.22.04c1.31.15 2.68-.14 3.87-.94.71-.47 1.27-1.07 1.7-1.74.14-.24.45-.31.68-.16.24.14.31.45.16.69-.49.79-1.16 1.49-1.99 2.04z"
        // stroke={fill}
        fill={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const MusicNote = ({ fill, size, height, width, ...props }: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 46.334 46.334"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M36.667,20.198c-5.331,0-9.667,4.337-9.667,9.667s4.336,9.666,9.667,9.666s9.667-4.336,9.667-9.666
        c0-1.664-0.423-3.232-1.167-4.602V2.532c0-0.688-0.288-1.342-0.789-1.791c-0.5-0.451-1.181-0.665-1.868-0.592L18.5,2.765
        c-1.308,0.142-2.333,1.283-2.333,2.6v24.032c-1.719-1.566-3.996-2.531-6.5-2.531C4.336,26.865,0,31.201,0,36.531
        s4.336,9.668,9.667,9.668s9.667-4.338,9.667-9.668c0-0.746-0.093-1.469-0.254-2.166h0.087V5.711l23-2.506v18.72
        C40.604,20.84,38.71,20.198,36.667,20.198z M9.667,43.199C5.991,43.199,3,40.207,3,36.531s2.991-6.666,6.667-6.666
        s6.667,2.99,6.667,6.666S13.344,43.199,9.667,43.199z M36.667,36.531c-3.676,0-6.667-2.99-6.667-6.666s2.991-6.668,6.667-6.668
        s6.667,2.992,6.667,6.668S40.344,36.531,36.667,36.531z"
        // stroke={fill}
        fill={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Funnel = ({ fill, size, height, width, ...props }: any) => {
  return (
    <svg
      fill="none"
      // stroke-width="1.5"
      // stroke="currentColor"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Ticket = ({ fill, size, height, width, ...props }: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 512 512"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M366.05,146a46.7,46.7,0,0,1-2.42-63.42,3.87,3.87,0,0,0-.22-5.26L319.28,33.14a3.89,3.89,0,0,0-5.5,0l-70.34,70.34a23.62,23.62,0,0,0-5.71,9.24h0a23.66,23.66,0,0,1-14.95,15h0a23.7,23.7,0,0,0-9.25,5.71L33.14,313.78a3.89,3.89,0,0,0,0,5.5l44.13,44.13a3.87,3.87,0,0,0,5.26.22,46.69,46.69,0,0,1,65.84,65.84,3.87,3.87,0,0,0,.22,5.26l44.13,44.13a3.89,3.89,0,0,0,5.5,0l180.4-180.39a23.7,23.7,0,0,0,5.71-9.25h0a23.66,23.66,0,0,1,14.95-15h0a23.62,23.62,0,0,0,9.24-5.71l70.34-70.34a3.89,3.89,0,0,0,0-5.5l-44.13-44.13a3.87,3.87,0,0,0-5.26-.22A46.7,46.7,0,0,1,366.05,146Z"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <line
        fill="none"
        stroke={fill}
        stroke-miterlimit="10"
        strokeWidth={32}
        stroke-linecap="round"
        stroke-linejoin="round"
        x1="250.5"
        y1="140.44"
        x2="233.99"
        y2="123.93"
      />
      <line
        fill="none"
        stroke={fill}
        stroke-miterlimit="10"
        strokeWidth={32}
        stroke-linecap="round"
        stroke-linejoin="round"
        x1="294.52"
        y1="184.46"
        x2="283.51"
        y2="173.46"
      />
      <line
        fill="none"
        stroke={fill}
        stroke-miterlimit="10"
        strokeWidth={32}
        stroke-linecap="round"
        stroke-linejoin="round"
        x1="338.54"
        y1="228.49"
        x2="327.54"
        y2="217.48"
      />
      <line
        fill="none"
        stroke={fill}
        stroke-miterlimit="10"
        strokeWidth={32}
        stroke-linecap="round"
        stroke-linejoin="round"
        x1="388.07"
        y1="278.01"
        x2="371.56"
        y2="261.5"
      />
    </svg>
  );
};

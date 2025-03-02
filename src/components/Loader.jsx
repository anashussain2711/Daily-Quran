import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex items-center justify-center h-screen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        opacity="0.15"
        viewBox="0 0 800 800"
        fill="none"
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#AF751E">
              <animate attributeName="stop-color" values="#AF751E; #E0C871; #DAA14C; #AF751E" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#E0C871">
              <animate attributeName="stop-color" values="#E0C871; #DAA14C; #AF751E; #E0C871" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#DAA14C">
              <animate attributeName="stop-color" values="#DAA14C; #AF751E; #E0C871; #DAA14C" dur="3s" repeatCount="indefinite" />
            </stop>
          </radialGradient>
        </defs>
        <g clipPath="url(#clip0_179_2)">
          <path d="M798.198 395.614L684.645 282.063V121.475C684.645 118.076 681.89 115.321 678.491 115.321H517.9L404.352 1.76783C402.043 -0.541098 397.957 -0.541098 395.65 1.76783L282.102 115.321H121.504C118.105 115.321 115.35 118.076 115.35 121.475V282.063L1.80185 395.614C-0.600615 398.019 -0.600615 401.913 1.80185 404.316L115.35 517.866V678.455C115.35 681.854 118.105 684.608 121.504 684.608H282.1L395.648 798.162C396.802 799.316 398.366 799.964 400 799.964C401.632 799.964 403.198 799.314 404.352 798.162L517.9 684.608H678.491C681.89 684.608 684.645 681.854 684.645 678.455V517.866L798.198 404.316C799.353 403.161 800 401.598 800 399.964C800 398.332 799.353 396.766 798.198 395.614ZM596.111 481.194V596.069H481.226L400 677.3L318.774 596.069H203.884V481.194L122.663 399.964L203.884 318.733V203.858H318.774L400 122.627L481.226 203.858H596.111V318.733L677.337 399.964L596.111 481.194Z" fill="url(#grad)"/>
          <path d="M563.429 236.547H467.685L400 168.853L332.313 236.547H236.571V332.274L168.884 399.966L236.571 467.659V563.385H332.313L400 631.08L467.683 563.385H563.427V467.659L631.114 399.966L563.427 332.274V236.547H563.429ZM517.484 430.012H472.532L504.315 461.79L505.95 505.916L461.824 504.281L430.041 472.501V517.446L400 549.8L369.957 517.443V472.493L338.174 504.279L294.048 505.913L295.683 461.788L327.466 430.005L282.518 430.009L250.164 399.961L282.518 369.918L327.466 369.913L295.683 338.135L294.048 294.009L338.174 295.644L369.957 327.427V282.48L400 250.123L430.043 282.48V327.427L461.827 295.644L505.952 294.009L504.318 338.135L472.534 369.918H517.487L549.834 399.961L517.484 430.012Z" fill="url(#grad)"/>
        </g>
      </svg>
    </motion.div>
  );
};

export default Loader;

import React from "react";
import Styles from "./Logo.module.scss";
import Link from "next/link";
const LogoIcon = () => {
  return (
    <div className={Styles.navbar__logo__section}>
      <Link href={"/"}>
        <div className={Styles.navbar__logo}>
          <h5 className={Styles.text__logo}>pr</h5>
        </div>
      </Link>
    </div>
  );
};

export default LogoIcon;

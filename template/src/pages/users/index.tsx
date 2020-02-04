import React from "react";
import { useTranslation } from "react-i18next";

export const Users = () => {
  const { t } = useTranslation();

  return <p>{t("greeting users")}</p>;
};

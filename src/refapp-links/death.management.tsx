import React from "react";
import { ConfigurableLink } from "@openmrs/esm-framework";
import { useTranslation } from "react-i18next";

export default function DeathManagement(){
  const {t} = useTranslation()
  return(
    <ConfigurableLink to="${openmrsBase}/spa/death">{t("Death Management")}</ConfigurableLink>
  );
}

import React, { FC, useEffect, useState } from "react";
import { ConfigurableLink, getLoggedInUser } from "@openmrs/esm-framework";
import { useTranslation } from "react-i18next";

const DeathLink: FC = () => {
  const { t } = useTranslation();
  return (
    <ConfigurableLink to={"${openmrsBase}/spa/death/"}>
      {t("deathManagement")}
    </ConfigurableLink>
  );
};
export default DeathLink;

import React from "react";
import { match } from "react-router-dom";
import { useConfig } from "@openmrs/esm-framework";
import { useTranslation } from "react-i18next";

export interface HomeDashboardProps {
  match: match;
  canSearch: boolean;
}

export default function HomeDashboard({
  match,
  canSearch,
}: HomeDashboardProps) {
  const config = useConfig();
  const { t } = useTranslation();
  return <section></section>;
}

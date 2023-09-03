import React from "react";

type DashboardCardProps = {
  id: number;
  title: string;
  prepTime: number;
  ingredientCount: number;
  calories: number | undefined;
  imageUrl: string;
  imageType: string;
};

export default function DashboardCard({
  id,
  title,
  prepTime,
  ingredientCount,
  calories,
  imageUrl,
  imageType,
}: DashboardCardProps) {
  return <div className="min-w-1/4 border border-solid">DashboardCard</div>;
}

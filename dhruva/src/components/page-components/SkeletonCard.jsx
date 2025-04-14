import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

function SkeletonCard() {
  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto animate-pulse">
      <Card className="w-full h-full flex flex-col dark:bg-gray-800/80 border-2 border-gray-100/85 dark:border-gray-700 shadow-md rounded-lg">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded-md" />
            <div className="h-6 w-6 bg-gray-300 dark:bg-gray-700 rounded-full" />
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 flex-grow space-y-3">
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded-md" />
          <div className="h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded-md" />
          <div className="h-4 w-28 bg-gray-300 dark:bg-gray-700 rounded-md" />
        </CardContent>

        <CardFooter className="p-4 sm:p-6 flex justify-center">
          <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-full" />
        </CardFooter>
      </Card>
    </div>
  );
}

export default SkeletonCard;

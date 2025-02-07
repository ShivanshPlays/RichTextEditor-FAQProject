"use client";

import { ApiAlert } from "./ui/api-alert";



const ApiList = () => {
  const origin = import.meta.env.VITE_BACKEND_URL;

  const baseUrl = `${origin}/api/faqs`;
  return (
    <div className="flex flex-col gap-5">
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}?lang={code}`}
      />
      <ApiAlert
        title="POST"
        variant="public"
        description={`${baseUrl}`}
      />
      <ApiAlert
        title="PUT"
        variant="admin"
        description={`${baseUrl}?id={id}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}?id={id}`}
      />
    </div>
  );
};

export default ApiList;

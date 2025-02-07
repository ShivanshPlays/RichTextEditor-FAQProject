const PostmanTestGuide = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-8 rounded-lg">
        Guide for testing the Backend API using Postman
      </h2>
      <div className="mt-4 space-y-4">
        <h3 className="text-lg font-semibold">
          Step 1: Install Postman (If Not Already Installed)
        </h3>
        <p className="bg-gray-300 rounded-lg p-2 shadow-inner">
          Download and install Postman from{" "}
          <a
            href="https://www.postman.com/downloads/"
            className="text-blue-600 underline"
          >
            Postman’s official website
          </a>
          .
        </p>

        <h3 className="text-lg font-semibold">
          Step 2: Import the JSON Collection
        </h3>
        <ol className="list-decimal pl-5 bg-gray-300 rounded-lg p-2 shadow-inner">
          <li>Open Postman.</li>
          <li>
            Click on <strong>File</strong> → <strong>Import</strong>.
          </li>
          <li>
            Select the provided JSON file{" "}
            <a
              href="https://github.com/ShivanshPlays/RichTextEditor-FAQProject/blob/main/faq-backend/BharatFD%20API%20Testing.postman_collection.json"
              className="text-blue-600 underline"
            >
              Link to JSON file
            </a>
            .
          </li>
          <li>
            Click <strong>Open</strong> to import the collection.
          </li>
        </ol>

        <h3 className="text-lg font-semibold">
          Step 3: Set Up Environment Variables
        </h3>
        <p className="bg-gray-300 rounded-lg p-2 shadow-inner">
          Click on the <strong>Environments</strong> tab in Postman and create a
          new environment with:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <code>Prod_Base_URL</code>: Set this to the base API URL
            "https://texteditorbe.shivanshsaxena.tech".
          </li>
        </ul>

        <h3 className="text-lg font-semibold">Step 4: Run the Tests</h3>
        <ol className="list-decimal pl-5 bg-gray-300 rounded-lg p-2 shadow-inner">
          <li>
            Navigate to the <strong>Collection Runner</strong> in Postman.
          </li>
          <li>
            Select the imported collection (
            <strong>BharatFD API Testing</strong>).
          </li>
          <li>
            Click <strong>Run Collection</strong>.
          </li>
        </ol>

        <h3 className="text-lg font-semibold">Step 5: Check Test Results</h3>
        <p className="bg-gray-300 rounded-lg p-2 shadow-inner">
          The results will display the status of each test (Pass/Fail). Click on
          individual requests to see response details.
        </p>
      </div>
    </div>
  );
};

export default PostmanTestGuide;

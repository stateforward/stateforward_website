import React from 'react';

const ChangeLogItem = ({ change }) => {
  return (
    <li className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-green-500">
              <time dateTime={change.date}>{change.date}</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-md font-semibold text-white">
                    {change.title}
                </h2>
                <div className="text-sm text-gray-500">
                  {change.summary}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default ChangeLogItem;

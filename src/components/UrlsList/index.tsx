// require('dotenv').configure();
import React from "react";
import * as dotenv from "dotenv";

import { List, UrlInfo } from "./styles";

dotenv.config({ path: __dirname + "/.env" });

type Url = {
  hash: string;
  originalURL: string;
  createdAt: string;
};

interface IProps {
  urls: Url[];
}

const parseDate = (date: string) => {
  let parsedDate = new Date(date);
  let day = parsedDate.toLocaleDateString();
  let hour = parsedDate.toLocaleTimeString();
  return `${day} ${hour}`;
};

const UrlsList: React.FC<IProps> = ({ urls }) => {
  return (
    <List>
      {urls.map(url => (
        <UrlInfo key={url.hash}>
          <div>
            <span>URL encurtada</span>
            <a href={`${process.env.REACT_APP_API_URL}/su/${url.hash}`}>
              {`${process.env.REACT_APP_API_URL}/su/${url.hash}`.replace(
                /(^\w+:|^)\/\//,
                ""
              )}
            </a>
          </div>
          <div>
            <span>URL original</span>
            <a href={url.originalURL}>
              {`${url.originalURL}`.replace(/(^\w+:|^)\/\//, "")}
            </a>
          </div>
          <div>
            <span>Data</span>
            <span>{parseDate(url.createdAt)}</span>
          </div>
        </UrlInfo>
      ))}
    </List>
  );
};

export default UrlsList;

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

const UrlsList: React.FC<IProps> = ({ urls }) => {
  return (
    <List>
      {urls.map(url => (
        <UrlInfo
          key={url.hash}
        >{`${process.env.REACT_APP_API_URL}/su/${url.hash}`}</UrlInfo>
      ))}
    </List>
  );
};

export default UrlsList;

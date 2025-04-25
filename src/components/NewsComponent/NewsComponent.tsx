import React, { useMemo } from "react";
import { Card, Tag, Typography } from "antd";
import { InfoCircleOutlined, HeartOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {
  IData_SnippetNews,
  IData_TagItem,
  IData_TrafficItem,
} from "../../types/news.types";
import "./NewsComponent.scss";

interface NewsComponentProps {
  news: IData_SnippetNews;
}

const NewsComponent: React.FC<NewsComponentProps> = ({ news }) => {
  // Format date to "DD Mon YYYY" format
  const formattedDate = useMemo(() => {
    return dayjs(news.DP).format("DD MMM YYYY");
  }, [news.DP]);

  // Calculate total reach
  const reachValue = useMemo(() => {
    const reach = news.REACH;
    if (reach >= 1000000) {
      return `${(reach / 1000000).toFixed(0)}M`;
    } else if (reach >= 1000) {
      return `${(reach / 1000).toFixed(0)}K`;
    }
    return reach.toString();
  }, [news.REACH]);

  // Format traffic data for display
  const trafficData = useMemo(() => {
    return news.TRAFFIC.map((item: IData_TrafficItem) => ({
      country: item.value,
      percentage: `${item.count}%`,
    }));
  }, [news.TRAFFIC]);

  // Render highlighted text
  const renderHighlightedText = (text: string) => {
    if (!text) return null;

    // Check if the text has any of the keywords to highlight
    const keywordsToHighlight = news.KW.map((kw: IData_TagItem) => kw.value);

    let highlightedText = text;
    keywordsToHighlight.forEach((keyword: string) => {
      const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
      highlightedText = highlightedText.replace(regex, (match) => {
        return `<span class="highlighted-keyword">${match}</span>`;
      });
    });

    return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  // Traffic display
  const renderTraffic = () => {
    return (
      <div className="traffic-section">
        <span className="traffic-title">Top Traffic: </span>
        {trafficData.map((item, index) => (
          <span key={item.country} className="traffic-item">
            {item.country} {item.percentage}
            {index < trafficData.length - 1 && " "}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="news-card-wrapper">
      <Card className="news-card" bordered={false}>
        <div className="news-header">
          <div className="news-meta">
            <span className="news-date">{formattedDate}</span>
            <span className="news-reach">{reachValue} Reach</span>
            {renderTraffic()}
          </div>

          <Typography.Title level={3} className="news-title">
            {news.TI}
          </Typography.Title>

          <div className="news-source">
            <span className="source-icon"></span>
            <a href={news.URL} className="source-domain">
              {news.DOM}
            </a>
            <span className="source-country">{news.CNTR}</span>
            <span className="source-language">En</span>
            <span className="source-authors">{news.AU.join(", ")}</span>
          </div>
        </div>

        <div className="news-content">
          {news.HIGHLIGHTS &&
            news.HIGHLIGHTS.map((highlight, index) => (
              <div key={index} className="news-snippet">
                {renderHighlightedText(highlight)}
              </div>
            ))}
          <div className="news-show-more">Show more</div>
        </div>

        <div className="news-footer">
          <div className="tags-section">
            {news.KW.map((tag: IData_TagItem) => (
              <Tag key={tag.value} className="news-tag">
                {tag.value} <span className="tag-count">{tag.count}</span>
              </Tag>
            ))}
          </div>

          <div className="actions-section">
            <InfoCircleOutlined className="action-icon" />
            <HeartOutlined className="action-icon" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default React.memo(NewsComponent);

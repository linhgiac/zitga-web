import React from "react";
import "./about.css";
import { Row, Col, Tabs } from "antd";
import PageStyles from "../pages.module.css";
import { ReactComponent as Separator } from "../../assets/contact-separator.svg";
const { TabPane } = Tabs;
const AboutUs = () => {
    return (
        <div className={PageStyles.content}>
            <div>
                <AboutUsTitleImage />
            </div>
            <div>
                <AboutUsContent />
            </div>
        </div>
    );
};
const AboutUsTitleImage = () => {
    return (
        <div className={PageStyles.titleContent}>
            <div className={PageStyles.contentTitleImg} id="aboutUs-img">
                <div class={PageStyles.contentTitleInner}>
                    <div className={PageStyles.title}>About Us</div>
                </div>
            </div>
        </div>
    );
};
const AboutUsContent = () => {
    const onChange = () => {};
    return (
        <div className="about-content-inner">
            <Row justify="center">
                <Col xs={24} sm={12}>
                    <div className="about-content-image">
                        <img src="http://zitga.com.vn/wp-content/uploads/2020/03/zitga-44.jpg" />
                    </div>
                </Col>
                <Col xs={24} sm={12}>
                    <div className="about-content-tabs-container">
                        <div className="about-content-tabs-title">
                            Chúng tôi là Zitga
                        </div>
                        <div className="about-content-separator">
                            <Separator />
                        </div>
                        <Tabs
                            onChange={onChange}
                            type="card"
                            className="about-content-tab"
                        >
                            <TabPane
                                tab="GIỚI THIỆU"
                                key="1"
                                className="tab-pane"
                            >
                                <p>
                                    Công ty cổ phần Zitga Việt Nam là đơn vị sản
                                    xuất và phát hành trò chơi điện tử trên điện
                                    thoại di dộng, được thành lập từ năm 2015,
                                    có 2 trụ sở tại Hà Nội và TP. HCM, Việt Nam.
                                    Chúng tôi đã ra mắt 5 sản phẩm trên thị
                                    trường toàn cầu: Stickman Legends, Empire
                                    Warriors, Shadow Knight, Summoners Era,
                                    Cyber Fighter và có 63 triệu người chơi tính
                                    đến tháng 4 năm 2021.
                                </p>
                                <p>
                                    Zitga định hướng trở thành công ty mobile
                                    game số 1 tại Việt Nam. Không ngừng cải
                                    tiến, sáng tạo ra các trò chơi chất lượng,
                                    góp phần nâng tầm vị thế thương hiệu Việt
                                    trong ngành công nghiệp trò chơi điện tử.
                                </p>
                                <div>
                                    <ul>
                                        <li>90+ Thành viên</li>
                                        <li>2 Trụ sở</li>
                                        <li>5 Sản phẩm</li>
                                        <li>63 triệu người chơi (User)</li>
                                    </ul>
                                </div>
                            </TabPane>
                            <TabPane
                                tab="TẦM NHÌN"
                                key="2"
                                className="tab-pane"
                            >
                                <p>
                                    Zitga trở thành công ty mobile game số 1 tại
                                    Việt Nam
                                </p>
                            </TabPane>
                            <TabPane tab="SỨ MỆNH" key="3" className="tab-pane">
                                <p>Nâng tầm vị thế Game Việt</p>
                            </TabPane>
                            <TabPane
                                tab="GIÁ TRỊ CỐT LÕI"
                                key="4"
                                className="tab-pane"
                            >
                                <p>
                                    <span>TỬ TẾ </span>– Zitga lựa chọn đi đến
                                    thành công bằng sự tử tế. Chúng tôi coi
                                    trọng sự tử tế trong cả lối cư xử và cách
                                    làm việc. Mỗi thành viên của Zitga hiểu rằng
                                    tử tế một cách chân thành chính là cơ sở để
                                    xây dựng niềm tin và thành công của mình.
                                    Chúng tôi tử tế với nhau, tử tế với đối tác,
                                    tử tế với khách hàng và tử tế với toàn cộng
                                    đồng; cam kết không làm những việc gây hại
                                    cho bất kỳ ai.
                                </p>
                                <p>
                                    <span>HIỆU QUẢ</span> – Tại Zitga, hiệu quả
                                    công việc được ghi nhận từ giá trị công việc
                                    được tạo nên. Zitga hướng tới cách làm việc
                                    tinh gọn và hiệu quả, hạn chế tối đa các
                                    công việc dư thừa. Trong mọi mục tiêu, nhiệm
                                    vụ, hiệu quả công việc luôn được ưu tiên
                                    hàng đầu.
                                </p>
                                <p>
                                    <span>TÂM HUYẾT </span>– Zitga đề cao tinh
                                    thần chủ động, nhiệt tình, nỗ lực hết mình
                                    trong từng nhiệm vụ. Mỗi tựa Game được phát
                                    hành chính là kết tinh từ tâm huyết của đội
                                    ngũ nhân viên.
                                </p>
                                <p>
                                    <span>TƯ DUY PHÁT TRIỂN</span> – Zitga quan
                                    niệm: Khả năng của mỗi người là vô tận, dù
                                    trong bất kỳ lĩnh vực, ngành nghề nào cũng
                                    luôn có thể tìm ra cách làm tốt hơn. Chúng
                                    tôi sẵn sàng đón nhận thử thách, coi khó
                                    khăn là cơ hội để rèn luyện và học hỏi; dám
                                    bước ra khỏi vùng an toàn, nỗ lực phát triển
                                    để chạm tới phiên bản tốt hơn của chính mình
                                    mỗi ngày.
                                </p>
                                <p>
                                    <span>CẢI TIẾN LIÊN TỤC</span> – Zitga tin
                                    tưởng các thay đổi nhỏ có thể dẫn đến khác
                                    biệt lớn. Chúng tôi nỗ lực cải tiến từ những
                                    điều nhỏ nhất, và mong muốn duy trì hoạt
                                    động cải tiến thành thói quen làm việc hàng
                                    ngày.
                                </p>
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;

import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
// import TimePicker from "./timePicker/index"
// import ShorttermPicker from "./shorttermPicker/index"
// import SelectorPicker from "./selectorPicker/index"
// import RegionPicker from "./regionPicker/index"
import RangePicker from "./rangePicker/index"
// import LinkagePicker from "./linkagePicker/index"
// import HalfPicker from "./halfPicker/index"
import DatePicker from "./datePicker/index"
import PropTypes from 'prop-types';
import './index.scss'

let defaultTime = new Date().getFullYear()
export default class WPicker extends React.Component {
    state = {
        itemHeight: `height: 88rpx;`,
        visible: false,
        result: {},
        confirmFlag: true,
        createKey: null,
        fyear: '',
        fmonth: '',
        fday: '',
        tyear: '',
        tmonth: '',
        tday: '',
        startDate: '开始日期',
        endDate: '结束日期'
    }
    componentWillMount() {
        this.props.onRef(this)
        this.setState({
            createKey: Math.random() * 1000
        })
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    touchStart = () => {
        if (this.props.timeout) {
            this.setState({
                confirmFlag: false
            })
        }
    }
    touchEnd = () => {
        if (this.props.timeout) {
            setTimeout(() => {
                this.setState({
                    confirmFlag: true
                })
            }, 500)
        }
    }
    handlerChange = (res) => {
        this.setState({
            result: { ...res }
        })
        console.log("这里发生了日期变化",res.obj);

        if (this.state.fday !== res.obj.fday || this.state.fmonth !== res.obj.fmonth || this.state.fyear !== res.obj.fyear) {
            this.state.fday = res.obj.fday;
            this.state.fmonth = res.obj.fmonth;
            this.state.fyear = res.obj.fyear;
            this.state.startDate = this.state.fyear + '-' + this.state.fmonth + '-' + this.state.fday;
        }

        if (this.state.tday !== res.obj.tday || this.state.tmonth !== res.obj.tmonth || this.state.tyear !== res.obj.tyear) {
            this.state.tday = res.obj.tday;
            this.state.tmonth = res.obj.tmonth;
            this.state.tyear = res.obj.tyear;
            this.state.endDate = this.state.tyear + '-' + this.state.tmonth + '-' + this.state.tday;
        }
    }
    show = () => {
        this.setState({
            visible: true
        })
    }
    hide = () => {
        this.setState({
            visible: false
        })
    }

    onCancel = (res) => {
        this.setState({
            visible: false
        })
        // this.$emit("cancel");
        this.props.cancel();
    }

    pickerConfirm = () => {
        if (!this.state.confirmFlag) {
            return;
        };
        // this.$emit("confirm",this.state.result);
        this.props.confirm(this.state.result);
        this.setState({
            visible: false
        })
    }
// 包装日期选择器
    render() {
        const { itemHeight, visible, result, confirmFlag, createKey } = this.state
        return (
            <View class="w-picker" key={createKey} data-key={createKey}>
                <View class={'mask' + (visible ? ' visible' : '')} onTap={this.onCancel} catchtouchmove={true}></View>
                <View class={'w-picker-cnt' + (visible ? ' visible' : '')}>
                    <View class="w-picker-header" catchtouchmove={true}>
                        <Text onTap={this.onCancel} style={{fontWeight:'bold',color:'#9C9C9C'}}>取消</Text>
                        {this.props.children}
                        <Text style={{color:`${this.props.themeColor}`,fontWeight:'bold'}} onTap={this.pickerConfirm}>确定</Text>
                    </View>
                   

                    {this.props.mode == 'range' ? (
                   <View>
                        <View class="w-picker-header-text" >
                        <Text style={{fontWeight:'bold',color:'black',fontSize:14}}>{this.state.startDate}</Text>
                        <Image src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F42%2F53%2F581391f854cbb_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621137584&t=0baa8d8abd4cf7013cae1eac8136da2a' style={{width:'20%',height:'70%'}}></Image>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:14}}>{this.state.endDate}</Text>
                        </View>
                   <RangePicker
                        class="w-picker-wrapper"
                        startYear={this.props.startYear}
                        endYear={this.props.endYear}
                        value={this.props.value}
                        itemHeight={itemHeight}
                        current={this.props.current}
                        change={this.handlerChange}
                        touchstart={this.touchStart}
                        touchend={this.touchEnd}
                   >
                    </RangePicker>
                    </View>
                    ) : null}

                    {this.props.mode == 'date' ? (
                    <DatePicker
                        class="w-picker-wrapper"
                        startYear={this.props.startYear}
                        endYear={this.props.endYear}
                        value={this.props.value}
                        fields={this.props.fields}
                        itemHeight={itemHeight}
                        current={this.props.current}
                        disabledAfter={this.props.disabledAfter}
                        change={this.handlerChange}
                        touchstart={this.touchStart}
                        touchend={this.touchEnd}
                    >
                    </DatePicker>                    
                    )
                    : null}


                    

                </View>
            </View >
        )
    }
}
WPicker.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array
    ]),//默认值
    current: PropTypes.bool,//是否默认显示当前时间，如果是，传的默认值将失效
    second: PropTypes.bool,//time-picker是否显示秒
    mode: PropTypes.string,
    themeColor: PropTypes.string,//确认按钮主题颜色
    fields: PropTypes.string,//日期颗粒度:year、month、day、hour、minute、second
    disabledAfter: PropTypes.bool,//是否禁用当前之后的日期
    options: PropTypes.oneOfType([//selector,region数据源
        PropTypes.array,
        PropTypes.object,
    ]),
    defaultProps: PropTypes.object,//selector,linkagle字段转换配置
    defaultType: PropTypes.string,
    hideArea: PropTypes.bool,//mode=region时，是否隐藏区县列
    level: PropTypes.oneOfType([//多级联动层级，表示几级联动,区间2-4;
        PropTypes.string,
        PropTypes.number,
    ]),
    timeout: PropTypes.bool,//是否开启点击延迟,当快速滚动 还没有滚动完毕点击关闭时得到的值是不准确的
    expand: PropTypes.oneOfType([//mode=shortterm 默认往后拓展天数
        PropTypes.string,
        PropTypes.number,
    ]),
    startYear: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    endYear: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
}
WPicker.defaultProps = {
    value: "",
    current: false,
    second: true,
    mode: "date",
    themeColor: "#f5a200",
    fields: "date",
    disabledAfter: false,
    options: [],
    defaultProps: {
        label: "label",
        value: "value",
        children: "children"
    },
    defaultType: "label",
    hideArea: false,
    level: 2,
    timeout: false,
    expand: 30,
    startYear: 1970,
    endYear: defaultTime
};


import React from 'react';
import {Link} from "react-router-dom";

import Item from 'components/item/Item';
import FiltersList from 'components/list/filters_list/FiltersList';

export default class List extends React.Component {

    render(){
    	return(
			<div className="contentList">
				<div className="row">
					<div className=" col-3">
						<FiltersList/>
					</div>
					<div className=" col-9">
						<div className="row">
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
							<div className=" col col-sm-6 col-md-4">
								<Item/>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

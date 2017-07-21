import React from 'react';
import { hashHistory } from 'react-router';

class BreadCrumbAreaContainer extends React.Component {

    constructor() {
        super();
        this.onClickOfBreadcrumb = this.onClickOfBreadcrumb.bind(this);
    }

    onClickOfBreadcrumb(el) {
        if (el === 'employee') {
            hashHistory.push('/dashPage/employee');
        } else if (el === 'projects') {
            hashHistory.push('/dashPage/projects');
        } else if (el === 'Dashboard') {
            hashHistory.push('/dashPage/dashboard');
        }
    }

    renderList() {
        const result = [];
        const breadcrumbArray = ['Dashboard'];

        const locationString = window.location.href;
        const employee = locationString.search('employee');
        const projects = locationString.search('projects');
        const dashPage = locationString.search('dashPage');
        if (employee !== -1) {
            breadcrumbArray.push('employee');
        } else if (projects !== -1) {
            breadcrumbArray.push('projects');
        } else if (dashPage !== (-1) && (employee === (-1) && projects === (-1))) {
            const locationstrg = locationString.split('/');
            if (!locationstrg[5].includes('dashboard')) {
                breadcrumbArray.push(locationstrg[5]);
                breadcrumbArray.push('employee');
            }
        }
        breadcrumbArray.forEach(el => {
            result.push(<button value={el} onClick={() => this.onClickOfBreadcrumb(el)}>{el}</button>);
        });

        return result;
    }

    render() {
        debugger;
        return (
          <div >
            <ul className="breadcrumb breadCrumb-style">
              {this.renderList()}
            </ul>

          </div>
        );
    }

}

export default BreadCrumbAreaContainer;

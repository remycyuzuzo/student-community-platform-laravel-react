
import Alert from "@/Components/myComponents/ui-elements/Alert";
import H3 from "@/Components/myComponents/ui-elements/H3";
import Layout from "@/Layouts/AppLayout";
import { isArray, toArray } from "lodash";
import { useEffect, useState } from "react";
import { GiSchoolBag } from "react-icons/gi";
import SchoolList from "./SchoolList";

function School({ schools }) {

  return (
    <Layout>
      <div className="min-h-screen">
        <div className=" sm:w-5/6 lg:w-11/12 mx-auto xl:w-3/4 pt-4 px-2">
          <H3 className="my-4 text-2xl"><GiSchoolBag className="inline-block mr-2" /> Colleges/Schools in Rwanda</H3>
          <div className="suggested-communities grid gap-4">
            {schools.length > 0 ? <SchoolList schoolList={schools} /> : (
              <Alert color={'orange'} message="No schools currently listed" />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default School;

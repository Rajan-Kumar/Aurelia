using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using poc_app.Data;

namespace poc_app.api
{
    public class BusinessUnitsController : ApiController
    {
        private pocappEntities db = new pocappEntities();

        public List<BusinessUnit> GetBusinessUnits()
        {
            return db.BusinessUnits.ToList();
        }

        //// GET: api/BusinessUnits
        //public IQueryable<BusinessUnit> GetBusinessUnits()
        //{
        //    return db.BusinessUnits;
        //}

        // GET: api/BusinessUnits/5
        [ResponseType(typeof(BusinessUnit))]
        public IHttpActionResult GetBusinessUnit(int id)
        {
            BusinessUnit businessUnit = db.BusinessUnits.Find(id);
            if (businessUnit == null)
            {
                return NotFound();
            }

            return Ok(businessUnit);
        }

        // PUT: api/BusinessUnits/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBusinessUnit(int id, BusinessUnit businessUnit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != businessUnit.BusinessUnitId)
            {
                return BadRequest();
            }

            db.Entry(businessUnit).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusinessUnitExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/BusinessUnits
        [ResponseType(typeof(BusinessUnit))]
        public IHttpActionResult PostBusinessUnit(BusinessUnit businessUnit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BusinessUnits.Add(businessUnit);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (BusinessUnitExists(businessUnit.BusinessUnitId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = businessUnit.BusinessUnitId }, businessUnit);
        }

        // DELETE: api/BusinessUnits/5
        [ResponseType(typeof(BusinessUnit))]
        public IHttpActionResult DeleteBusinessUnit(int id)
        {
            BusinessUnit businessUnit = db.BusinessUnits.Find(id);
            if (businessUnit == null)
            {
                return NotFound();
            }

            db.BusinessUnits.Remove(businessUnit);
            db.SaveChanges();

            return Ok(businessUnit);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BusinessUnitExists(int id)
        {
            return db.BusinessUnits.Count(e => e.BusinessUnitId == id) > 0;
        }
    }
}